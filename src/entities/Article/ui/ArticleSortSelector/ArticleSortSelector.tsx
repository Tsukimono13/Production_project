import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/consts/articleConsts';
import { Icon } from '@/shared/ui/Icon/Icon';
import SortSvg from '@/shared/assets/icons/sort.svg';
import { HStack } from '@/shared/ui/Stack';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('По возрастанию'),
        },
        {
            value: 'desc',
            content: t('По убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('По дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('По алфавиту'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('По популярности'),
        },
    ], [t]);

    return (
        <HStack gap="20" className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Icon Svg={SortSvg} />
            <Select
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </HStack>
    );
});
