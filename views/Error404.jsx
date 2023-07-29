const React = require('react');
const Def = require('./Default');

function Error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry we can't find this page!</p>
        <img src="http://placekitten.com/600/600" alt="kitten" />
      </main>
    </Def>
  )
};

module.exports = Error404;
