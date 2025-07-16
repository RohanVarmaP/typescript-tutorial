import { log } from 'console';
import path from 'path';
import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export const breadcrumbNameMap: Record<string, string> = {
    '': 'Home',
    'unattemptdedquiz': 'Unattemptded Quizzes',
    'singleattemptedquiz': 'Single Attempted Completed Quiz',
    'completedquiz': 'Completed Quiz',
    'quiz': 'Quiz',
    'review': 'Review',
    'rank': 'Rank',
};

type pathnameType = {
    path: string,
    name: string
}

const Breadcrumbs = () => {
    const location = useLocation();
    const { pathname } = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean)
    // console.log('pathname: ', pathname.split('/').filter(Boolean))
    const localList = localStorage.getItem('localList')
    const [breadcrumbList, setBreadcrumbList] = React.useState<pathnameType[]>(localList ? JSON.parse(localList) : [])
    const [breadcrumbs, setBreadcrumbs] = React.useState(breadcrumbList.map((value, index) => (
        <span key={value.path}>
            <Link to={value.path}>{value.name}</Link>
            {index < pathnames.length - 1 && ' / '}
        </span>)))
    console.log('breadcrumbs: ', breadcrumbs)

    const breadcrumbMap: { [key: string]: string } = {
        '': 'Home',
        'login': 'Login',
        'signup': 'Signup',
        'unattemptdedquiz': 'Unattempted Quiz',
        'singleattemptedquiz': 'Single Attempted Quiz',
        'completedquiz': 'Completed Quiz',
        'quiz': 'Quiz',
        'review': 'Review',
        'rank': 'Ranking',
    };

    function getName(pathname: string) {
        const pathList: string[] = pathname.split('/').filter(Boolean)
        if (!pathList || pathList.length === 0) {
            return breadcrumbNameMap['']
        } else if (pathList[0] === 'quiz') {
            if (pathList[pathList.length - 1] === 'rank' || pathList[pathList.length - 1] === 'review') {
                return breadcrumbNameMap[pathList[pathList.length - 1]]
            } else {
                return breadcrumbNameMap[pathList[0]]
            }
        } else {
            return breadcrumbNameMap[pathList[0]]
        }
    }

    function addToBreadcrumbList(breadcrumb: pathnameType, breadcrumbList: pathnameType[]) {
        if (breadcrumb.name) {
            const foundIndex = breadcrumbList.findIndex(b => b.name === breadcrumb.name);

            if (foundIndex === -1) {
                const newList = [...breadcrumbList, breadcrumb]
                setBreadcrumbList(newList)
            } else if ((foundIndex + 1) < breadcrumbList.length) {
                const newList =
                    breadcrumbList.splice(0, foundIndex);
                setBreadcrumbList(newList)
            }
            localStorage.setItem('localList', JSON.stringify(breadcrumbList))
        }
        else {
            setBreadcrumbList([])
            localStorage.setItem('localList', JSON.stringify([]))
        }
    }

    React.useEffect(() => {
        const breadcrumb: pathnameType = { path: pathname, name: getName(pathname) }
        // console.log('breadcrumb: ', breadcrumb)
        addToBreadcrumbList(breadcrumb, breadcrumbList)
        // console.log('breadcrumbList: ', breadcrumbList)
    }, [location])

    React.useEffect(() => {
        setBreadcrumbs(breadcrumbList.map((value, index) => (
            <span key={value.path}>
                <Link to={value.path}>{value.name}</Link>
                {' > '}
            </span>)))
    }, [breadcrumbList])
    return (
        <>
            {breadcrumbs}
        </>
    )
}

export default Breadcrumbs
