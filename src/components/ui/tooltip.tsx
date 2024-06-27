import React from 'react';
import { Tooltip } from 'antd';

interface TooltipProps {
  content: string;
  children: React.ReactNode; // Asegúrate de incluir children como parte de las props
}

const TolTip: React.FC<TooltipProps> = ({ content, children }) => (
  <Tooltip title={content}> {/* Utiliza content como el título del Tooltip */}
    {children}
  </Tooltip>
);

export default TolTip;
