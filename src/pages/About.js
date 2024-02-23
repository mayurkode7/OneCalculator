import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section>
      <p>this is about page</p>
      <Link to="/">Main</Link>
    </section>
  );
}
