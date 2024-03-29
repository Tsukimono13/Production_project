import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { addCommentsFormActions, addCommentsFormReducer } from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
    addCommentForm: addCommentsFormReducer,
};

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props : AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentsFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max justify="between" className={classNames(cls.AddCommentForm, { }, [className])}>
                <Input
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                    className={cls.input}
                />
                <Button
                    theme={ThemeButton.BACKGROUND_INVERTED}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
