import { useEffect, useState } from 'react';
import { useMoralisWeb3Api, useMoralis } from 'react-moralis';

async function getDataNfts({ limit, setNFTs, searchNFTs }) {
	const options = { q: 'Pancake', chain: 'ETH', filter: 'name', limit };
	const responseNfts = await searchNFTs(options);
	console.log(responseNfts);
	await setNFTs(responseNfts.result);
}

function useNFTs() {
	const { Moralis } = useMoralis();

	const [limit, setLimit] = useState(10);
	const [nfts, setNFTs] = useState([]);
	const Web3Api = useMoralisWeb3Api();

	useEffect(() => {
		Moralis.start({
			serverUrl: import.meta.env.VITE_SERVER_URL,
			appId: import.meta.env.VITE_APP_ID,
			masterKey: import.meta.env.VITE_MASTER_KEY,
		});
	});

	useEffect(() => {
		getDataNfts({ limit, setNFTs, searchNFTs: Web3Api.token.searchNFTs });
	}, [limit]);

	return nfts;
}

function App() {
	const nfts = useNFTs();

	console.log(nfts);
	return (
		<div className='bg-black min-h-screen text-blue-600 p-4'>
			<h2 className='text-center text-2xl'>
				Template React + Eslint + Tailwindcss
			</h2>
		</div>
	);
}

export default App;
