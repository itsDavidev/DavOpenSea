import { useNFTs } from './lib/hooks/useNFTs';

function App() {
	const { NFTs, setNFTsLimit } = useNFTs();

	console.log('app', NFTs);
	return (
		<div className='bg-black min-h-screen text-blue-600 p-4'>
			<h2 className='text-center text-2xl'>
				Template React + Eslint + Tailwindcss
			</h2>
			<button
				onClick={() => setNFTsLimit(20)}
				className='bg-purple-700 py-2 px-4'>
				{' add 20 nfts '}
			</button>
			{NFTs?.results?.map(nft => {
				const metadata = JSON.parse(nft.metadata);
				return (
					<article key={metadata.name}>
						<h2>{metadata.name}</h2>
					</article>
				);
			})}
		</div>
	);
}

export default App;
