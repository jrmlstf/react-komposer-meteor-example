import {Meteor} from 'meteor/meteor';
import {Projects} from '/libs/collections';

Meteor.publish('projects.list', () => {
	const selector = {};
	const options = {};

	return Projects.find(selector, options);
});