import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import apiURL from '../api';

export const PagesList = ({pages}) => {

	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} id={page.id} pages={pages} />
			})
		}
	</>
} 
