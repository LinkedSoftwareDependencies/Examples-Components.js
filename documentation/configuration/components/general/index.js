module.exports = {
  path: {
    to: {
      MyComponent: function MyComponent(data) {
        console.log(data);
      },
      MyInstance: { "id": "this is my instance!" }
    }
  }
};