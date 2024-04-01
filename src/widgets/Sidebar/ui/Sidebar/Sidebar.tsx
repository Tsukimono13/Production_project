import React, { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import cls from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import OpenSvg from '@/shared/assets/icons/left.svg';
import CloseSvg from '@/shared/assets/icons/right.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import ChangeSvg from '@/shared/assets/icons/change.svg';
import { HStack } from '@/shared/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.CLEAR}
                round
            >
                {collapsed ? <Icon Svg={OpenSvg} /> : <Icon Svg={CloseSvg} />}
            </Button>
            <VStack role="navigation" gap="16" className={cls.items}>
                {itemsList}
            </VStack>
            <VStack max gap="12" className={cls.switchers}>
                <HStack gap="4">
                    <LangSwitcher />
                    {!collapsed && <Icon Svg={ChangeSvg} />}
                </HStack>
                <HStack gap="4">
                    <ThemeSwitcher />
                    {!collapsed && <Icon Svg={ChangeSvg} />}
                </HStack>
            </VStack>
        </aside>
    );
});
