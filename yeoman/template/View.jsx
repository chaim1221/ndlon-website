import React from 'react';
// import { } from 'semantic-ui-react';

const View = () => {
  console.log("View: <%= componentName %>");
  return (
    <main className="<%= componentName %>">
      <h1><%= componentName %></h1>
      <div>Content goes here.</div>
    </main>
  );
}

export default View;
