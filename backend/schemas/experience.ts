export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobPosition',
      title: 'Job Position',
      type: 'string',
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'string',
    },
    {
      name: 'timePeriod',
      title: 'Time Period',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'index',
      title: 'Index',
      type: 'number',
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        {
          name: 'list-item',
          title: 'List item',
          type: 'string',
        },
      ],
    },
  ],
}
