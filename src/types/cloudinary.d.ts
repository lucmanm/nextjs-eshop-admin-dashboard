export type TCoundinaryResults = {
    info: {
        folder: string;
        original_filename: string;
        public_id: string;
        secure_url: string;
        signature: string;
        url: string;
        created_at: string;
        thumbnail_url: string;
        tags: [];
    };
};

export type TImage = {
    asset_id: string;
    public_id: string;
    folder: string;
    filename: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    uploaded_at: string;
    bytes: 312283;
    backup_bytes: number;
    width: number;
    height: number;
    aspect_ratio: number;
    pixels: number;
    url: string;
    secure_url: string;
    status: string;
    access_mode: string;
    access_control: null;
    etag: string;
    created_by: null;
    uploaded_by: null;
  };