import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 250;

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClose = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, cls[theme]])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClose}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
