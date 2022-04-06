function Employee({ label, name, cssClasses, children}) {

    const baseCss = 'base_css ' + cssClasses;
	return (
		<>
        {/* <h1>{children}</h1> */}
			<div className={baseCss}>
				<h2>{label}</h2>
				<p>{name}</p>
			</div>
			<div className="department_wrapper">
				<h2>Department:</h2>
				<p>Sales</p>
			</div>
		</>
	);
}

export default Employee;
