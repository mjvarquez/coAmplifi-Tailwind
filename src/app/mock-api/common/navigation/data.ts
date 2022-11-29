/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'calendar',
        title: 'Calendar',
        type : 'basic',
        icon : 'mat_outline:calendar_today',
        link : '/task/myTaskPlanner'
    },
    {
        id   : 'clipboard',
        title: 'Clipboard',
        type : 'collapsable',
        icon : 'mat_outline:calendar_view_week',
        children: [
            {
                id   : 'kanban',
                title: 'My Clipboard',
                type : 'basic',
                link: '/task/myClipboard/kanban'
            },
            {
                id   : 'planner',
                title: 'My Planner',
                type : 'basic',
                link: '/task/myClipboard/planner'
            },
            {
                id   : 'docket',
                title: 'Docket',
                type : 'basic',
                link: '/task/myClipboard/docket'
            },
            {
                id   : 'taskEditor',
                title: 'Timeclock Editor',
                type : 'basic',
                link: '/task/myClipboard/taskEditor'
            }
        ]
    },
    {
        id   : 'meetings',
        title: 'Meetings',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/meetings'
    },
    {
        id   : 'projects',
        title: 'Projects',
        type : 'basic',
        icon : 'mat_outline:preview',
        link : '/projects'
    },
    {
        id   : 'projects_beta',
        title: 'Projects (Beta)',
        type : 'basic',
        icon : 'mat_outline:preview',
        link : '/projects_beta'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
