import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import "./style.scss";
const EmptyView = ({ label }) => {
  return (
    <div className="empty-view">
      <CancelPresentationIcon  />
      <p className="empty-view__label">{label}</p>
    </div>
  );
};

export default EmptyView;
