import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button';
import EnSvg from '@/shared/assets/icons/en.svg';
import RuSvg from '@/shared/assets/icons/ru.svg';
import { Icon } from '@/shared/ui/Icon';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const icon = i18n.language === 'ru' ? <Icon Svg={RuSvg} /> : <Icon Svg={EnSvg} />;

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {icon}
            {/* {t(short ? 'Короткий вариант' : 'Язык')} */}
        </Button>
    );
});
