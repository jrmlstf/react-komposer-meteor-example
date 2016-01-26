import React from 'react';

const projectsList = ({projects}) => (
	<ul>
		{projects.map(project => (
			<li key={project._id}>{project.title}</li>
		))}
	</ul>
);

export default projectsList;