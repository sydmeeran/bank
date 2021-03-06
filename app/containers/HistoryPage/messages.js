/*
 * HistoryPage Messages
 *
 * This contains all the text for the HistoryPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HistoryPage';

export default defineMessages({
  helmetHistoryTitle: {
    id: `${scope}.helmetHistoryTitle`,
    defaultMessage: 'History · Bank Application',
  },
  earnings: {
    id: `${scope}.earnings`,
    defaultMessage: 'Your earnings',
  },
  expenses: {
    id: `${scope}.expenses`,
    defaultMessage: 'Your expenses',
  },
});
