import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        onChange, value, className, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            items={options}
            readonly={readonly}
            className={classNames('', {}, [className])}
        />
    );
});
