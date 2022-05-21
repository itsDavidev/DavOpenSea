import CardNFT from './components/cardNFT.component';
import useIPFs from './lib/hooks/useIPFs';
import { useNFTs } from './lib/hooks/useNFTs';

function App() {
	const { NFTs, setNFTsLimit } = useNFTs();
	console.log(NFTs);

	if (NFTs.loading) return <div>Loading...</div>;
	if (NFTs.Error) return <div>Error: {NFTs.Error.message}</div>;

	return (
		<>
			<h2 className='text-center text-2xl'>DavOpenSea</h2>
			<button
				onClick={() => setNFTsLimit(20)}
				className=' py-2 px-4 text-white bg-purpleLite w-auto my-3 mx-auto'>
				{' add 20 nfts '}
			</button>
			<section className='flex flex-wrap gap-6 justify-center items-center'>
				{NFTs?.results?.map(nft => {
					const metadata = JSON.parse(nft.metadata);
					return (
						<CardNFT
							key={nft.token_hash}
							metadata={metadata}
							minted={nft.block_number_minted}
							createdAt={nft.createdAt}
						/>
					);
				})}{' '}
			</section>
		</>
	);
}

export default App;
