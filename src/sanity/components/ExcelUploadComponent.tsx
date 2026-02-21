import React, { useState, useRef } from 'react'
import { useClient } from 'sanity'
import { Box, Button, Card, Flex, Heading, Text, Stack, CardTone, Inline, Badge } from '@sanity/ui'
import * as XLSX from 'xlsx'

export function ExcelUploadComponent() {
    const [isUploading, setIsUploading] = useState(false)
    const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
        type: 'idle',
        message: '',
    })
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Use the API version appropriate for your configuration
    const client = useClient({ apiVersion: '2024-01-01' })

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        setIsUploading(true)
        setStatus({ type: 'idle', message: 'Parsing Excel file...' })

        try {
            const data = await file.arrayBuffer()
            const workbook = XLSX.read(data)
            const worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsonData = XLSX.utils.sheet_to_json(worksheet)

            if (jsonData.length === 0) {
                throw new Error('The uploaded Excel file is empty.')
            }

            setStatus({ type: 'idle', message: `Found ${jsonData.length} items. Uploading to Sanity...` })

            let successCount = 0
            let errorCount = 0

            // Process each row
            for (const row of jsonData as any[]) {
                try {
                    // Map Excel columns to Sanity schema fields
                    // Assuming columns like: Name, Description, Price, Spicy Level, Platform, Popular, Swiggy Link, Zomato Link
                    const doc = {
                        _type: 'menuItem',
                        name: row['Name'] || row['name'] || 'Unnamed Item',
                        description: row['Description'] || row['description'] || '',
                        price: Number(row['Price'] || row['price'] || 0),
                        spicyLevel: row['Spicy Level'] || row['spicyLevel'] || 'Medium',
                        platform: row['Platform'] || row['platform'] || 'All',
                        popular: Boolean(row['Popular'] || row['popular'] || false),
                        swiggyLink: row['Swiggy Link'] || row['swiggyLink'] || '',
                        zomatoLink: row['Zomato Link'] || row['zomatoLink'] || '',
                    }

                    // Use client.create to add new document
                    // If you want to require Image uploads, those have to be handled separately. We'll leave Image empty or handle it if needed.
                    await client.create(doc)
                    successCount++
                } catch (err) {
                    console.error('Error creating document:', err)
                    errorCount++
                }
            }

            setStatus({
                type: successCount > 0 ? 'success' : 'error',
                message: `Upload complete. Successfully imported ${successCount} items. ${errorCount > 0 ? `Failed to import ${errorCount} items.` : ''}`,
            })

            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        } catch (error: any) {
            console.error('Upload error:', error)
            setStatus({ type: 'error', message: error.message || 'Failed to process the Excel file.' })
        } finally {
            setIsUploading(false)
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    return (
        <Card padding={4} radius={2} shadow={1} margin={4}>
            <Stack space={4}>
                <Heading as="h1" size={4}>Bulk Upload Menu Items</Heading>
                <Text muted>
                    Upload an Excel (.xlsx) file to quickly import menu items into your Sanity Studio.
                    The Excel file should have columns matching your schema: Name, Description, Price, Spicy Level, Platform, Popular, Swiggy Link, Zomato Link.
                </Text>

                <Box marginTop={4}>
                    <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <Button
                        fontSize={2}
                        padding={3}
                        tone="primary"
                        text={isUploading ? 'Uploading...' : 'Select Excel File'}
                        onClick={triggerFileInput}
                        disabled={isUploading}
                        style={{ backgroundColor: '#FF5722', color: 'white' }}
                    />
                </Box>

                {status.message && (
                    <Card
                        padding={3}
                        radius={2}
                        tone={status.type === 'success' ? 'positive' : status.type === 'error' ? 'critical' : 'default'}
                        marginTop={4}
                    >
                        <Text>{status.message}</Text>
                    </Card>
                )}
            </Stack>
        </Card>
    )
}
