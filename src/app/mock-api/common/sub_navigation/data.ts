/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'calendar',
        title: 'My Campus',
        type : 'collapsable',
        icon : 'mat_outline:corporate_fare',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Fishtank',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'All Time Off',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Dispatch',
                type : 'basic',
                link : '/dashboards/project'
            },
        ]
    },
    {
        id   : 'calendar',
        title: 'My Comms',
        type : 'collapsable',
        icon : 'mat_outline:cast',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Memo',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Hallway',
                type : 'basic',
                link : '/dashboards/project'
            }
        ]
    },
    {
        id   : 'calendar',
        title: 'My Office',
        type : 'collapsable',
        icon : 'mat_outline:task',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Calendar',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'calendar.clipboard',
                title: 'Clipboard',
                type : 'basic',
                link : 'task/myClipboard'
            },
            {
                id   : 'dashboards.project',
                title: 'Meetings',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Projects',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Projects (Beta)',
                type : 'basic',
                link : '/dashboards/project'
            },
        ]
    },
    {
        id   : 'calendar',
        title: 'My Records',
        type : 'collapsable',
        icon : 'mat_outline:text_snippet',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Memo',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Hallway',
                type : 'basic',
                link : '/dashboards/project'
            }
        ]
    },
    {
        id   : 'calendar',
        title: 'My Stats',
        type : 'collapsable',
        icon : 'mat_outline:insert_chart',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Charts',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Commitment Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Communication Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Individual Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Leadership Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Learning Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Management Profile',
                type : 'basic',
                link : '/dashboards/project'
            },
        ]
    },
    {
        id   : 'calendar',
        title: 'My Payroll',
        type : 'collapsable',
        icon : 'mat_outline:av_timer',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Time Processing',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Admin',
                type : 'basic',
                link : '/dashboards/project'
            }
        ]
    },
    {
        id   : 'calendar',
        title: 'My Console',
        type : 'collapsable',
        icon : 'mat_outline:settings',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Task Categories',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Functions',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Learning',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Personal',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Positions',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Roles',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'User Accounts',
                type : 'basic',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.project',
                title: 'Settings',
                type : 'basic',
                link : '/dashboards/project'
            },
        ]
    },
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
