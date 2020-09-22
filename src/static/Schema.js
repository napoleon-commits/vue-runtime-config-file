import configSettings from '../../static/config.json';

export default {
  groups: [
    {
      foo: 'bar',
    },
    {
      l: 'Description',
      fields: [
        { foo: 'bar' },
        { foo: 'bar' },
        {
          model: 'ServiceBranch',
          values: configSettings.branches,
        },
        { foo: 'bar' },
      ],
    },
    {
      bar: 'foo',
    },
  ],
};
