// rfce
function Header() {
	const handler = (text) => {
		console.log('text');
	};
	/*
	여러줄 주석
	*/
	return (
		// 한줄주석
		<header>
			{/* JSX안쪽 주석 */}
			<h1 className='title'>Logo</h1>
			<p onClick={() => handler('hello')}>링크</p>
		</header>
	);
}

export default Header;
