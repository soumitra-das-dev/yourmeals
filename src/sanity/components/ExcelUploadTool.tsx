import { Tool } from 'sanity'
import { ExcelUploadComponent } from './ExcelUploadComponent'
import { FileSpreadsheet } from 'lucide-react'

export const excelUploadTool = (): Tool => {
    return {
        title: 'Bulk Upload',
        name: 'bulk-upload',
        icon: FileSpreadsheet,
        component: ExcelUploadComponent,
    }
}
