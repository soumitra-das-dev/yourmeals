import { Tool } from 'sanity'
import { ExcelUploadComponent } from './ExcelUploadComponent'
// We can use a simple icon from @sanity/icons or an emoji
import { DocumentIcon } from '@sanity/icons'

export const excelUploadTool = (): Tool => {
    return {
        title: 'Bulk Upload',
        name: 'bulk-upload',
        icon: DocumentIcon,
        component: ExcelUploadComponent,
    }
}
