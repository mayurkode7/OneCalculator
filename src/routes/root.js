import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menus from '../menus';
export default function Root() {
  return (
    <nav>
      <Menus />
    </nav>
  );
}
