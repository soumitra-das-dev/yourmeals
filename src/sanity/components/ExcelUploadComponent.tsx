import React, { useState } from 'react';
import { useClient } from 'sanity';
import * as XLSX from 'xlsx';
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ExcelUploadComponent = () => {
    const client = useClient({ apiVersion: '2024-02-15' });
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus(null);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        setStatus(null);

        try {
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

            const transaction = client.transaction();

            for (const row of jsonData) {
                const doc = {
                    _type: 'menuItem',
                    name: row['Name'] || row['name'],
                    description: row['Description'] || row['description'] || '',
                    price: Number(row['Price'] || row['price'] || 0),
                    spicyLevel: row['Spicy Level'] || row['spicyLevel'] || 'Medium',
                    platform: row['Platform'] || row['platform'] || 'Direct',
                    popular: Boolean(row['Popular'] || row['popular']),
                    tags: row['Tags'] ? String(row['Tags']).split(',').map((t) => t.trim()) : [],
                };

                if (doc.name && doc.price !== undefined) {
                    transaction.create(doc);
                }
            }

            await transaction.commit();
            setStatus({ type: 'success', message: `Successfully imported items from ${file.name}` });
            setFile(null);
        } catch (error: any) {
            console.error('Error uploading excel:', error);
            setStatus({ type: 'error', message: error.message || 'Failed to upload menu items.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Bulk Upload Menu Items via Excel
            </h1>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                The Excel file should have columns matching your schema: Name, Description, Price, Spicy Level, Platform, Popular, Tags. (Tags can be comma-separated like &quot;Veg, Snacks&quot;).
            </p>

            <div style={{
                border: '2px dashed #ccc',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: '#fafafa',
                cursor: 'pointer',
                marginBottom: '1rem'
            }}>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    id="excel-file-input"
                />
                <label htmlFor="excel-file-input" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FileSpreadsheet style={{ width: '48px', height: '48px', color: '#ff5722', marginBottom: '0.5rem' }} />
                    <span style={{ fontWeight: '500' }}>
                        {file ? file.name : 'Click to select an Excel file (.xlsx, .xls)'}
                    </span>
                </label>
            </div>

            {status && (
                <div style={{
                    padding: '1rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    backgroundColor: status.type === 'success' ? '#e8f5e9' : '#ffebee',
                    color: status.type === 'success' ? '#2e7d32' : '#c62828'
                }}>
                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span>{status.message}</span>
                </div>
            )}

            <button
                onClick={handleUpload}
                disabled={!file || loading}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: !file || loading ? '#ccc' : '#ff5722',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: !file || loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Upload size={20} />}
                {loading ? 'Uploading...' : 'Upload & Create Menu Items'}
            </button>
        </div>
    );
};
