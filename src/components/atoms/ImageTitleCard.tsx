import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import "./ImageTitleCard.css";

export interface ImageTitleCardProps {
  imageUrl: string;
  title: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}

export const ImageTitleCard: React.FC<ImageTitleCardProps> = ({
  imageUrl,
  title,
  category,
  onClick,
  className,
}) => {
  return (
    <div className={`image-title-card ${className || ""}`}>
      <button className="image-wrap" type="button" onClick={onClick}>
        <img src={imageUrl} alt={title} className="image" />
      </button>
      <div className="title-row">
        <PlaceOutlinedIcon className="title-icon" fontSize="inherit" />
        <div className="title-text">
          <span className="title-main">{title}</span>
          {category ? <span className="title-sep"> | </span> : null}
          {category ? <span className="title-cat">{category}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default ImageTitleCard;
