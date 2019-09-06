import React from 'react';

export const Error = (props: { targetClassName: string; id: string }) => {
  const message = `Clipboard Text Copy widget error: 
    Modeler configuration error! No element found with class "${props.targetClassName}"`;
  console.error(props.id, message);
  return <div className="alert alert-danger">{message}</div>;
};
