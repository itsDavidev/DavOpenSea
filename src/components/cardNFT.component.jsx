import useIPFs from '../lib/hooks/useIPFs';

function CardNFT({ metadata, minted, createdAt, contract_type }) {
	const urlImg = useIPFs(metadata.image);
	return (
		<>
			<article className=' w-64 rounded-2xl overflow-hidden cardNft'>
				<img
					src={urlImg}
					alt={metadata.name}
					className='w-full rounded-2xl object-cover h-56'
				/>
				<div className='p-4'>
					<h2 className='text-purple text-xl text-center font-bold'>
						{metadata.name}
					</h2>
					<span className='text-brand font-bold'>{contract_type}</span>
					<p>
						Created at:{' '}
						<span className='text-purple'>
							{new Date(createdAt).toLocaleString().split(',')[0]}
						</span>
					</p>
					<p>
						Minted :<span className='text-brand font-bold'>{minted}</span>
					</p>
					<div className='flex justity-center w-full my-3'>
						<button className='bg-purpleLite mx-auto w-32 rounded-lg text-black font-bold'>
							add to cart
						</button>
					</div>
				</div>
			</article>
		</>
	);
}

export default CardNFT;
