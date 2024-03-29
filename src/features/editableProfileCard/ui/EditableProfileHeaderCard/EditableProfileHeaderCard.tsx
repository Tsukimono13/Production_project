import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text/Text';
import { getUserData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

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
        <HStack justify="between" max>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            theme={ThemeButton.BACKGROUND_INVERTED}
                            onClick={onEdit}
                            data-testid="EditableProfileHeaderCard.EditButton"
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileHeaderCard.CancelButton"
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileHeaderCard.SaveButton"
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
};
