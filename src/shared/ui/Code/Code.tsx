import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopySvg from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, codeText } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                <CopySvg width={24} height={24} />
            </Button>
            <code>{codeText}</code>
        </pre>
    );
});
