import React, { Component } from 'react';

export default function (props) {
  return (
    <ul>
      {props.data.map((post, index) => <li key={index}>{post}</li>)}
    </ul>
  );
}
