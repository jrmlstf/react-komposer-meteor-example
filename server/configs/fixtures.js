import {Projects} from '/libs/collections';

export default function () {
  if (!Projects.findOne()) {
    for (let i = 1; i <= 5; i++) {
      const title = `This is the project #${i} title`;
      Projects.insert({title});
    }
  }
}
