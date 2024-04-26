import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import EditSvg from '@/shared/assets/icons/edit.svg';
import cls from './EditableProfileHeaderCard.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { VStack, HStack } from '@/shared/ui/Stack';
import { TextSize, Text } from '@/shared/ui/Text';

interface EditableProfileHeaderCardProps {
    className?: string;
  }

export const EditableProfileHeaderCard = ({ className } : EditableProfileHeaderCardProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <VStack max>
            <Text title={t('Профиль')} size={TextSize.L} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <HStack gap="8" className={cls.containerBtn}>
                            <Icon Svg={EditSvg} />
                            <Button
                                data-testid="EditableProfileHeaderCard.EditButton"
                                theme={ThemeButton.CLEAR}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        </HStack>
                    ) : (
                        <HStack gap="16" className={cls.containerBtn}>
                            <Button
                                theme={ThemeButton.BACKGROUND_INVERTED}
                                onClick={onSave}
                                data-testid="EditableProfileHeaderCard.SaveButton"
                            >
                                {t('Сохранить')}
                            </Button>
                            <Button
                                onClick={onCancelEdit}
                                data-testid="EditableProfileHeaderCard.CancelButton"
                            >
                                {t('Отменить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </VStack>
    );
};
