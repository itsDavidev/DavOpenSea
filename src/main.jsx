import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from 'react-moralis';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<MoralisProvider
			serverUrl={import.meta.env.VITE_SERVER_URL}
			appId={import.meta.env.VITE_APP_ID}>
			<div className='bg-black min-h-screen text-white p-4'>
				<App />
			</div>
		</MoralisProvider>
	</React.StrictMode>
);
