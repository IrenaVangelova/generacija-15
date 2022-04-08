function Employee({ label, name, cssClasses, children }) {
	const baseCss = "base_css " + cssClasses;
	return (
		<>
			<div className={baseCss}>
				<div className="information">
					<h4>{label}</h4>
					<p>{name}</p>
				</div>
				<div className="information__department">
					<span>Department:</span>
					<p>Sales</p>
				</div>
			</div>
			
			{children}
		</>
	);
}

export default Employee;
