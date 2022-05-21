import useIPFs from './lib/hooks/useIPFs';
import { useNFTs } from './lib/hooks/useNFTs';

function App() {
	const { NFTs, setNFTsLimit } = useNFTs();
	console.log(NFTs);

	if (NFTs.loading) return <div>Loading...</div>;
	if (NFTs.Error) return <div>Error: {NFTs.Error.message}</div>;

	return (
		<div className='bg-black min-h-screen text-blue-600 p-4'>
			<h2 className='text-center text-2xl'>
				Template React + Eslint + Tailwindcss
			</h2>
			<button
				onClick={() => setNFTsLimit(20)}
				className='bg-purple-400 py-2 px-4 text-black'>
				{' add 20 nfts '}
			</button>
			<section className='flex flex-wrap gap-6'>
				{NFTs?.results?.map(nft => {
					const metadata = JSON.parse(nft.metadata);
					const urlImg = useIPFs(metadata.image);
					console.log(
						'naem',
						metadata.name,
						'img=',
						urlImg,
						'<=',
						metadata.image
					);
					return (
						<article key={nft.token_hash}>
							<h2>{metadata.name}</h2>
							<img src={urlImg} alt className='w-60' />
						</article>
					);
				})}{' '}
			</section>
		</div>
	);
}

export default App;
