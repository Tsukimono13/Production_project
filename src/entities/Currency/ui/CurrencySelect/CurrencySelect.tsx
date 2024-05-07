import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/Popups';

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
    const { onChange, value, className, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

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
