use thiserror::Error;

/// Errors common to many riddle crates
#[derive(Debug, Error)]
pub enum CommonError {
    #[error(transparent)]
    IOError(std::io::Error),

    #[error(transparent)]
    Common(#[from] Box<dyn std::error::Error + Send + Sync>),
}
