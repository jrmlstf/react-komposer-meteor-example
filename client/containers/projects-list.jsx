import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Meteor} from 'meteor/meteor';
import {Projects} from '/libs/collections.js';
import Component from '../components/projects-list.jsx';

const composeFn = (props, onData) => {
	const handle = Meteor.subscribe('projects.list');

	if (handle.ready()) {
		const projects = Projects.find();
		onData(null, {projects});
	}

	const cleanup = () => console.log('cleanup');

	return cleanup;
};

const MyLoading = () => (<div>Hmm...</div>);
export default composeWithTracker(composeFn, MyLoading)(Component);