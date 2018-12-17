import React from 'react';

import IOCard from './InvolvementOptionCard';
import IOSubForm from './InvolvementOptionSubscribeForm';
import Link from '../Link';
import List from '../List';
import podcastIcon from '../../../images/podcast-illustration.svg';
import slackIcon from '../../../images/slack-illustration.svg';
import subscribeIcon from '../../../images/subscribe-illustration.svg';

const InvolvementOptions = () => (
  <List>
    <IOCard>
      <IOCard.Image
        src={subscribeIcon}
        alt="Subscribe illustration"
      />
      <IOCard.Heading>
        Subscribe to the Demuxed mailing list
      </IOCard.Heading>
      <IOSubForm />
    </IOCard>

    <IOCard>
      <IOCard.Image
        src={slackIcon}
        alt="Slack illustration"
      />
      <IOCard.Heading>
        Join the Demuxed Slack channel!
      </IOCard.Heading>
      <IOCard.Button as={Link} to="#">
        Join
      </IOCard.Button>
    </IOCard>

    <IOCard>
      <IOCard.Image
        src={podcastIcon}
        alt="Podcast illustration"
      />
      <IOCard.Heading>
        Subscribe to the Demuxed podcast
      </IOCard.Heading>
      <IOCard.Button as={Link} to="#">
        Subscribe
      </IOCard.Button>
    </IOCard>
  </List>
);

export default InvolvementOptions;
