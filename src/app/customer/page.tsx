import Link from 'next/link';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import {
  Drafts as DraftsIcon,
  Send as SendIcon,
  MoveToInbox as InboxIcon,
  StarBorder,
} from '@mui/icons-material';

export default function Page() {
  return (
    <div>
      <List
        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            고객지원
          </ListSubheader>
        }
      >
        <Divider />
        <Link href={'/customer/qna'}>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary='QnA' />
          </ListItemButton>
        </Link>
        <Divider />
        <Link href={'/customer/faq'}>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='FAQ' />
          </ListItemButton>
        </Link>
        <Divider />
        <Link href={'/customer/inquiry'}>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='1:1문의' />
          </ListItemButton>
        </Link>
        <Divider />
        <Collapse in timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Link href={'/customer/write'}>
              <ListItemButton sx={{pl: 4}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='문의 작성' />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
        <Divider />
      </List>
    </div>
  );
}
