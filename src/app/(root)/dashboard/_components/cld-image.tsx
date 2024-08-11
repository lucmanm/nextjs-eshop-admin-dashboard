"use client";
import { Card } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";

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
type CloudImage = {
  public_id: string;
};

export const CloudImage = ({ public_id }: CloudImage) => {
  return (
    <Card>
      <CldImage
        width="200"
        height="200"
        src={public_id}
        sizes="100vw"
        alt="Description of my image"
      />
    </Card>
  );
};
