import { createImageUrlBuilder } from '@sanity/image-url'
import { dataset, projectId } from '../env'

let builder: any = null;
if (projectId && projectId !== 'dummy-project-id') {
    try {
        builder = createImageUrlBuilder({
            projectId: projectId || '',
            dataset: dataset || '',
        });
    } catch {
        builder = null;
    }
}

export const urlFor = (source: any) => {
    if (!source) return null;
    if (typeof source === 'string') {
        return { url: () => source };
    }
    if (source?.asset?.url) {
        return { url: () => source.asset.url };
    }
    if (builder) {
        try {
            return builder.image(source);
        } catch {
            return null;
        }
    }
    return null;
}
