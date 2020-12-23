import { NodeBuilder } from '@baklavajs/core';

export default new NodeBuilder('EventStart', {
   twoColumn: true,
   width: 200,
})
   .addOutputInterface('Event Out')
   .onCalculate(() => {
      return 'Calculating please wait. cb';
   })

   .build();
