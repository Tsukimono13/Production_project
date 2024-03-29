import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Vietnam, content: Country.Vietnam },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        onChange, value, className, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            readonly={readonly}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            className={classNames('', {}, [className])}
        />
    );
});
