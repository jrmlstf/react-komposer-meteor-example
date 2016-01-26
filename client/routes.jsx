import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/layout.jsx';
import ProjectsList from './containers/projects-list.jsx';

FlowRouter.route('/', {
	action() {
		mount(Layout, {
			content: (
				<ProjectsList />
			)
		})
	}
});