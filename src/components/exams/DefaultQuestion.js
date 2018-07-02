/* eslint no-underscore-dangle: 0 */
export default class {
  constructor() {
    this.text = '';
    this.imageUrl = '';
    this.correctAnswer = 'a';
    this.category = '';
    this.answers = [{
      _id: 'а',
      text: '',
    }, {
      _id: 'б',
      text: '',
    }, {
      _id: 'в',
      text: '',
    }, {
      _id: 'г',
      text: '',
    },
    ];
  }

  deepCopy() {
    const copy = {};
    copy.text = this.text;
    copy.imageUrl = this.imageUrl;
    copy.category = this.category;
    copy.correctAnswer = this.correctAnswer;
    copy.answers = this.answers.map(answer => ({
      _id: answer._id,
      text: answer.text,
    }));
    return copy;
  }
}


//   question: {
//     text: 'Кой е най-високият връх в България?',
//     imageUrl: ' http://www.westcoastpeaks.com/pics11B/bulg090711_038summitinview.jpg',
//     correctAnswer: 'а',
//     answers: [{
//       _id: 'а',
//       text: '',
//     }, {
//       _id: 'б',
//       text: '',
//     }, {
//       _id: 'в',
//       text: '',
//     }, {
//       _id: 'г',
//       text: '',
//     },
//       ],
//   }
// ,

